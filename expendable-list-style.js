const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="expendable-list-style">
  <template>
    <style>
      :host {
        display: block;
      }

      /* We need to propagate styles if first child is not an expendable-list-item */
      :host ::content .iron-selected expendable-list-item,
      :host ::content expendable-list-item.iron-selected {
        width: 100%;
        margin: 15px auto 15px auto;
        @apply (--shadow-elevation-16dp);
      }

      :host ::content .iron-selected paper-item,
      :host ::content .iron-selected paper-icon-item {
        font-weight: bold;
        cursor: default;
      }

      :host ::content .iron-selected paper-menu paper-item,
      :host ::content .iron-selected paper-menu paper-icon-item {
        font-weight: normal;
        cursor: pointer;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
