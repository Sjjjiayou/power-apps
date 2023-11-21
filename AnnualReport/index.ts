import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Pages } from "./Pages";

export class BWAnnualReport
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  notifyOutputChanged: () => void;
  container: HTMLDivElement;
  context: ComponentFramework.Context<IInputs>;
  resources: ComponentFramework.Resources;
  isTestHarness: boolean;
  records: {
    [id: string]: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
  };
  dataJsonConfig: string;
  pageJsonConfig: string;
  medalJsonConfig: string;
  appWidthRate: number;
  appHeightRate: number;
  buttonFirstWidth: string;
  buttonFirstHeight: string;
  buttonEndWidth: string;
  buttonEndHeight: string;
  buttonFirstImgBottom: string;
  buttonFirstImgLeft: string;
  buttonEndImgBottom: string;
  buttonEndImgLeft: string;
  isPalyMusic: boolean;
  changePlayMusic: boolean;
  handleChangeMusic = (isPalyMusic: boolean): void => {
    this.changePlayMusic = isPalyMusic;

    if (this.isPalyMusic !== this.changePlayMusic) {
      this.isPalyMusic = this.changePlayMusic;
      this.notifyOutputChanged();
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
    _state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.container = container;
    this.context = context;
    this.context.mode.trackContainerResize(true);
    this.resources = this.context.resources;
    this.isTestHarness = document.getElementById("control-dimensions") !== null;
  }
  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    console.log("context", context);
    const dataset = context.parameters.PageCongigRecords;
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

    if (context.parameters.DataJson.raw) {
      this.dataJsonConfig = context.parameters.DataJson.raw;
    }

    if (context.parameters.PageJson.raw) {
      this.pageJsonConfig = context.parameters.PageJson.raw;
    }

    if (context.parameters.MedalJson.raw) {
      this.medalJsonConfig = context.parameters.MedalJson.raw;
    }

    if (context.parameters.AppWidthRate.raw) {
      this.appWidthRate = context.parameters.AppWidthRate.raw;
    }

    if (context.parameters.AppHeightRate.raw) {
      this.appHeightRate = context.parameters.AppHeightRate.raw;
    }

    if (context.parameters.ButtonFirstWidth.raw) {
      this.buttonFirstWidth = context.parameters.ButtonFirstWidth.raw;
    }

    if (context.parameters.ButtonFirstHeight.raw) {
      this.buttonFirstHeight = context.parameters.ButtonFirstHeight.raw;
    }

    if (context.parameters.ButtonEndWidth.raw) {
      this.buttonEndWidth = context.parameters.ButtonEndWidth.raw;
    }

    if (context.parameters.ButtonEndHeight.raw) {
      this.buttonEndHeight = context.parameters.ButtonEndHeight.raw;
    }

    if (context.parameters.ButtonFirstImgBottom.raw) {
      this.buttonFirstImgBottom = context.parameters.ButtonFirstImgBottom.raw;
    }

    if (context.parameters.ButtonFirstImgLeft.raw) {
      this.buttonFirstImgLeft = context.parameters.ButtonFirstImgLeft.raw;
    }

    if (context.parameters.ButtonEndImgBottom.raw) {
      this.buttonEndImgBottom = context.parameters.ButtonEndImgBottom.raw;
    }

    if (context.parameters.ButtonEndImgLeft.raw) {
      this.buttonEndImgLeft = context.parameters.ButtonEndImgLeft.raw;
    }

    const contain = this.container;
    const root = createRoot(contain!);

    root.render(
      this.records &&
        dataset.columns &&
        React.createElement(Pages, {
          width: allocatedWidth,
          height: allocatedHeight,
          columns: dataset.columns,
          dataJsonConfig: this.dataJsonConfig,
          pageJsonConfig: this.pageJsonConfig,
          medalJsonConfig: this.medalJsonConfig,
          records: this.records,
          appWidthRate: this.appWidthRate,
          appHeightRate: this.appHeightRate,
          handleChangeMusic: this.handleChangeMusic,
          buttonFirstWidth: this.buttonFirstWidth,
          buttonFirstHeight: this.buttonFirstHeight,
          buttonEndWidth: this.buttonEndWidth,
          buttonEndHeight: this.buttonEndHeight,
          buttonFirstImgBottom: this.buttonFirstImgBottom,
          buttonFirstImgLeft: this.buttonFirstImgLeft,
          buttonEndImgBottom: this.buttonEndImgBottom,
          buttonEndImgLeft: this.buttonEndImgLeft,
        })
    );
  }
  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {
      IsPalyMusic: this.isPalyMusic,
    } as IOutputs;
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}
