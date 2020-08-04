const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="expendable-list-item-style">
  <template>
    <style>
      :host {
        display: block;
        background-color: white;

        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        width: 99%;
        margin: 0px auto 0px auto;
        @apply (--shadow-elevation-2dp);
      }

      :host ::content paper-item,
      :host ::content paper-icon-item {
        cursor: pointer;
      }

      :host ::content paper-item:focus:before,
      :host ::content paper-icon-item:focus:before {
        background: none;
      }

      :host ::content paper-icon-button {
        color: #808080;
        width: 36px;
        height: 36px;
      }

      :host ::content paper-icon-button:hover,
      :host ::content paper-icon-button:focus {
        color: #000000;
      }

      :host ::content paper-icon-button:active {
        background-color: #e6e6e6;
        border-radius: 50%;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
