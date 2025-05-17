<script>
import {useSitesTextEditorStore} from "../../../stores/modules/sitesTextEditorStore.js";
import {useDataStore} from "../../../stores/dataStore.js";

export default {
  data(){
    return {
      manualHeightStates: [40,0],
      currentManualHeightIndex: 0,
      rawConfig: "",
      debounceTimeout: null,
      debounceReturn: null
    }
  },
  computed: {
    editorHeightStyle(){
      return this.manualHeightStates[ this.currentManualHeightIndex ];
    },
  },
  methods: {
    close () {
      this.$emit('close')
    },
    changeManualState(){
      this.currentManualHeightIndex += 1;
      this.currentManualHeightIndex = this.currentManualHeightIndex % this.manualHeightStates.length;
    },
    debounceEvent(fn, delay = 700) {
      let timeout
      return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    saveSites(){
      let parsed = this.sitesTextEditorStore.parseInput(this.rawConfig);
      this.dataStore.data['categories'] = parsed;
      this.dataStore.saveToLocalStorage()
      this.close();
    }
  },
  setup(){
    const sitesTextEditorStore = useSitesTextEditorStore();
    const dataStore = useDataStore();
    return {
      sitesTextEditorStore,
      dataStore
    };
  },
  created() {
    this.debouncedParseInput = this.debounceEvent(this.sitesTextEditorStore.parseInput);
    this.rawConfig = this.sitesTextEditorStore.stringifyCurrentSites( this.dataStore.data.categories );
  }
}
</script>
<template>
  <div class="data-text-editor">
    <div class="data-text-editor-header" @click="changeManualState">
      <div v-if="!editorHeightStyle">
        Click here to show/hide config instruction!
      </div>
<pre v-if="editorHeightStyle" class="text-editor-manual" :style="'height:'+editorHeightStyle+'vh'">
Sites list notation

0) Lines that starts with '#' character are comments that will be omitted by parser
1) Hierarchy - categories group sites and subsites together. Sites may have a sub-site, a site on which shares base domain. Each one is defined in separate line
    categories - are not preceded by any special character
    sites - are preceded by minus '-' character and should be inside category
    subsites - are preceded by plus '+' character and should be inside category and after site or subsite
2) Fields - are meant to be specified in exact order, separated by '|' character. Not all fields are required, only first one is needed:
    category: name | color(hex) | icon(emoji)
    site: address | name | search_address | color(hex) | icon(emoji)
    subsite: address | name | search_address | color(hex) | icon(emoji)
3) Shorthands - typing full subsite address sometimes is redundant. Starting site/subsite search_address or subsite address with '/' to tells parser to stick this to the end of base domain of parent site.

Example config
News category | #faa | 🌎
-bbc.com | BBC | bbc.com/search?q= | #000 | 📰
+bbc.com/sports | BBC sports | bbc.co.uk/search?d=SPORT_GNL&q=

Fun
-reddit.com
+/r/aww
+/r/cats
+/r/dogs

</pre>
    </div>
    <div class="data-text-editor-body">
<textarea class="data-text-editor-text-area" v-model="rawConfig">

</textarea>
    </div>
    <div class="data-text-editor-footer">
      <div class="data-text-editor-button" @click="saveSites()">
        save
      </div>
      <div class="data-text-editor-button" @click="close()">
        cancel
      </div>
    </div>
  </div>
</template>