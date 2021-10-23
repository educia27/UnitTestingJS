const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert')


describe("launchOutput", function(){
  it("should return 'Launch' when passed a number that is only divisible by 2", function(){
      let output = launchOutput(4)
      assert.strictEqual(output,"Launch!")
   });

   

   it("should return 'Code!' when passed a number that is only divisible by 3", function(){
      let output = launchOutput(3)
      assert.strictEqual(output,"Code!")
   });

   it("should return 'Rocks!' when passed a number that is only divisible by 5", function(){
      let output = launchOutput(5)
      assert.strictEqual(output,"Rocks!")
   });

   it("should return 'LaunchCode!' when passed a number that is only divisible by 2 and 3", function(){
      let output = launchOutput(12)
      assert.strictEqual(output,"LaunchCode!")
   });

   it("should return 'Code Rocks!' when passed a number that is  divisible by 3 and 5", function(){
      let output = launchOutput(15)
      assert.strictEqual(output,"Code Rocks!")
   });

    it("should return 'Launch Rocks!' when passed a number that is  divisible by 2 and 5", function(){
      let output = launchOutput(10)
      assert.strictEqual(output,"Launch Rocks!")
   });

   it("should return 'Code Rocks!' when passed a number that is  divisible by 2, 3, and 5", function(){
      let output = launchOutput(30)
      assert.strictEqual(output, "LaunchCode Rocks!")
   });

   it("should return 'Rutabagas! That doesn't work.' when passed a number that is NOT  divisible by 2, 3, or 5", function(){
      let output = launchOutput(1)
      assert.strictEqual(output,"Rutabagas! That doesn't work.")
   });

  

  







});