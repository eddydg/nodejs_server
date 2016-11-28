var assert = require("assert");
var todo_utils = require('../todo_utils');



describe('#Error : Todo is null', function () {
   it('todo_utils._getAll should throw an error : todo is null', function () {
      todo_utils._init();
      assert.throws(function() {
         todo_utils._getAll((todoList) => { console.log(todoList); })
      }, /todo is null/);
    });

    it('should throw an error: true is true', function () {
       assert.equal(false, true, "wesh tu fais nimp")
     });

});
