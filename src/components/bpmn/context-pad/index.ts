import AppendPreviewModule from "bpmn-js/lib/features/append-preview";
import DirectEditingModule from 'diagram-js-direct-editing';
import ContextPadModule from 'diagram-js/lib/features/context-pad';
import SelectionModule from 'diagram-js/lib/features/selection';
import ConnectModule from 'diagram-js/lib/features/connect';
import CreateModule from 'diagram-js/lib/features/create';
import PopupMenuModule from "bpmn-js/lib/features/popup-menu";

import ContextPadProvider from './ContextPadProvider';

const contextPad = {
  __depends__: [
    AppendPreviewModule,
    DirectEditingModule,
    ContextPadModule,
    SelectionModule,
    ConnectModule,
    CreateModule,
    PopupMenuModule
  ],
  __init__: [ 'contextPadProvider' ],
  contextPadProvider: [ 'type', ContextPadProvider ]
};

export default contextPad;