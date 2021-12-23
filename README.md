# vlcb 2021

# Brass Rubbing database

# TODO

* fix up overall look
* picture carousels
* back-reference links
* URL, use rubbing?vlcn='7F'
* publish to azure static web app (ASWA)
* major: test ASWA lambda funcs

# Arch

* vue 2
* material design from vuetify
* airtable for database
* nightly job to download latest database (<300KB) for R/O operations
* can use azure static web apps
  * for authorized access to write funcs (with key secret)
  * for authorized access to certain data files


# Misc

## Done



## Reminders
* Project setup: `npm install`
* Compiles and hot-reloads for development: `npm run serve`
* Compiles and minifies for production: `npm run build`
* Lints and fixes files `npm run lint`
* Customize configuration: See [Configuration Reference](https://cli.vuejs.org/config/).


## History
* 2012? Heroku; manual js/html framework!; mongolab database, w/ caching layer
* wilderness years:
  * dynamo db  - fine, just rdbms clunky; auth (at the time) clunky
  * firebase - fine, auth ok, but odd db design
  * fauna...
* airtable - ok, not for high-volume, not much auth (q.v. azure), but nice to use, relationships/editing nice
* Hosting...
  * netlify - ok, toolset wasn't mature
  * azure - static webapps: provides a separate auth layer!, integrated (lambda) funcs!
