import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  failure_message: DS.attr('string'),
  uuid: DS.attr('string'), // for the link to show details
  running_batch: DS.attr('boolean'),
  running_stream: DS.attr('boolean')

//  Uncomment when lambda_application model is created.
//  applications: DS.hasMany('lambda_application')
});
