// freeze , seal , create ==> make object inmutable ==> futher changes not allowed
/**
 * - freeze: 
      first level -> can not add /delete/update properties
      nested level -> all possible

      A frozen object -  new properties cannot be added, existing properties cannot be remove or value cannot be changed, and the object's prototype cannot be re-assigned.

 *  - seal:
      first level -> adding not possible , update / delete possible
      nested level -> all possible

      - create 
      creates a new object, using an existing object as the prototype inheritance --- not concat , inheritance property not view in clg because it in object proto mai added
     //? update
      - defineProperties :: defines allow  modifies or not existing properties  , default in each object ::: writable - true


 * 
 */

