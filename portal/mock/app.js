export default {
  'GET /api/apps': [
    {
      name: 'app1-umi', // hack
      entry: 'http://localhost:8011',
      base: '/app1',
      mountElementId: 'root-slave'
    }
    // {
    //   name: 'app2',
    //   entry: 'http://localhost:8002/app2',
    //   base: '/app2',
    //   mountElementId: 'root-slave',
    //   props: {
    //     testProp: 'test'
    //   }
    // }
  ]
}
