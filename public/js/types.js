(function(window) {
	
  function isString( input ){
    return typeof input === 'string';
  }
  
  function isNumber( input ){
    return typeof input === 'number';
  }
  
  function isBoolean( input ){
    return typeof input === 'boolean';
  }
  
  function isArray( input ){
    return input instanceof Array;
  }
  
  function isObject( input ){
    return input instanceof Object;
  }
  
  function isFunction( input ){
    return input instanceof Function;
  }
  
  function isNull( input ){
    return input === null;
  }
      
  function isUndefined( input ){
    return typeof input === 'undefined';
  }

  window.Types  = {
    isString : isString,
    isNumber : isNumber,
    isBoolean : isBoolean,
    isArray : isArray,
    isObject : isObject,
    isFunction : isFunction,
    isNull : isNull,
    isUndefined : isUndefined
  };

}(window));
