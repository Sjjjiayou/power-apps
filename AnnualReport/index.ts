import * as React from "react";
import * as ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Pages } from "./Pages";
import { Howl } from "howler";

export class AnnualReport
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  notifyOutputChanged: () => void;
  container: HTMLDivElement;
  private button: HTMLButtonElement;
  context: ComponentFramework.Context<IInputs>;
  sortedRecordsIds: string[] = [];
  resources: ComponentFramework.Resources;
  isTestHarness: boolean;
  records: {
    [id: string]: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
  };
  buttonDom: HTMLElement | null;

  handleShotDom = async (dom: HTMLElement | null) => {
    console.log("dom", dom);
    // this.buttonDom = dom;
    if (document.body) {
      const abc = await html2canvas(document.body).then(function (canvas) {
        console.log(canvas);
        //document.body.appendChild(canvas);
        var outputbase = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        return outputbase;
      });
      console.log(abc);
      const link = document.createElement("a");
      link.href = abc;
      link.download = "download-new.png";
      link.click();
    }
  };

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.container = container;
    this.context = context;
    this.context.mode.trackContainerResize(true);
    this.resources = this.context.resources;
    this.isTestHarness = document.getElementById("control-dimensions") !== null;
    this.button = document.createElement("button");
    container.id = "containerid";
    container.appendChild(this.button);
    this.button.addEventListener("click", this.onButtonClick.bind(this));
    // Adding the label and button created to the container DIV.
    this.button.style.width = 20 + "px";
    this.button.style.height = 20 + "px";
  }
  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    console.log("context", context);
    const dataset = context.parameters.records;
    const datasetChanged = context.updatedProperties.indexOf("dataset") > -1;

    // The test harness provides width/height as strings
    const allocatedWidth = parseInt(
      context.mode.allocatedWidth as unknown as string
    );
    const allocatedHeight = parseInt(
      context.mode.allocatedHeight as unknown as string
    );

    if (datasetChanged || this.isTestHarness) {
      this.records = dataset.records;
    }

    ReactDOM.render(
      React.createElement(Pages, {
        width: allocatedWidth,
        height: allocatedHeight,
        columns: dataset.columns,
        records: this.records,
        handleShotDom: this.handleShotDom,
      }),
      this.container
    );
  }
  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  public async onButtonClick(event: Event): Promise<void> {
    console.log("this.buttonDom", this.buttonDom);
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }

  

}
