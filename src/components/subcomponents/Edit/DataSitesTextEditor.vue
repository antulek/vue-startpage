<script>
import {useSitesTextEditorStore} from "../../../stores/modules/sitesTextEditorStore.js";

export default {
  data(){
    return {
      manualHeightStates: [73,40,0],
      currentManualHeightIndex: 0,
      rawConfig: "",
      debounceTimeout: null,
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

  },
  setup(){
    const sitesTextEditorStore = useSitesTextEditorStore();
    return {
      sitesTextEditorStore
    };
  },
  created() {
    this.debouncedParseInput = this.debounceEvent(this.sitesTextEditorStore.parseInput);
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
<!--# Click here to show/hide config instruction!
# Lines that starts with '#' character are comments that will be omitted by parser
#
#Hierarchy - category group together sites and their sub-sites. They are marked by number of space identations:
#Category[no indentation] - it is showed on website as separate 'table', in which You will insert website list
# Website[1 space] - address to certain website, generally it should point to 'main' site if You want it's sub-sites to work
#  Subsite[2 spaces] - it's subsite for it's parent (main)website. Full address can be provided, but it's possible to skip address to 'main site' it sub-site address starts with '/' character
#
#How you can add a category
#category_name,icon_address,color
#category_name,color
#category_name

#How you can add a site
# site_name,site_address,search_link,icon_address
# site_name,site_address,search_link
# site_name,site_address
# site_address

# search link sometimes have searched word' inside of search link, in that
# case your searched words will be put into place of word 'QUERY' in search
# link, or added at the very end of it
# protip go into site, search 'QUERY' using it's internal search engine and
# copy resulting link right into this file

#Example
# reddit,reddit.com,/search?q=
# reddit,reddit.com
# reddit.com

#How you can add a subsite
#  subsite_name,site_address,search_link,icon_address
#  subsite_name,site_address,search_link
#  subsite_name,site_address
#  subsite_address

#if site/subsite address starts with '/' it means that it's address will be added atop of parent's address category
# reddit.com
#  unixporn,/r/unixporn/,/search?q=QUERY&restrict_sr=on
#  unixporn,reddit.com/r/unixporn
#  unixporn,/r/unixporn
#  /r/unixporn-->

# category_name
# category_name | #color | 'icon'
# -site_address
# -site_name | site_address | #color | search_address | 'icon'
# +subsite_subaddress
# +subsite_name | subsite_address | #color | subsite_search_address | 'icon'
#
# category | #faa | C
# -website | https://www.website.com | 'icon' | https://www.website.com/?q=QUERRY
# -site | site.com | 'icon' | /?q=
# -wp.pl
# +/f1
# +cars | /cars | 'c' | /q?=
</pre>
    </div>
    <div class="data-text-editor-body">
<textarea class="data-text-editor-text-area" v-model="rawConfig" @input="debouncedParseInput">

</textarea>
    </div>
    <div class="data-text-editor-footer">
      <div class="data-text-editor-button">
        save
      </div>
      <div class="data-text-editor-button" @click="close()">
        cancel
      </div>
    </div>
  </div>
</template>