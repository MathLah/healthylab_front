import Vue from 'vue'

Vue.filter('shortDate', date => new Intl.DateTimeFormat('fr-FR', { day : 'numeric', month : 'short' }).format(date))
