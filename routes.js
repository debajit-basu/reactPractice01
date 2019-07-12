const routes = require('next-routes');
module.exports =
  routes()
       .add({name: 'demo', pattern: '/', page: '_Test/first'})

      // .add({name: 'sectionbuilder', pattern: '/course/builder/:course_id/:section_id/:topic_id/:type/:list_id', page: '_Section/MainBuilder'})

      // .add({name: 'feedback', pattern: '/feedback', page: '_ManageFrontEnd/_Feedback/feedbackList'})
