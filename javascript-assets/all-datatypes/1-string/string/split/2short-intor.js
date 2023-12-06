const str = 'we are neo'
console.log(str.split('    ')) //! not able to find any case where 3 space present
console.log(str.split('')) //? no space found ==> each have no space break all  , even space have no space
console.log(str.split(' ')) //!1 space found ko split
