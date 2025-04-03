const RED = '#ff0000'
const PINK = '#ff00fb'
const GREEN = '#00ff00'
const BLUE = '#0037ff'
const BLACK = '#000000'

const value = $prop('PersistantTrackerPlugin.SessionBestLiveDeltaSeconds')

function getColorArray(v) {
  if (v === 0 || v == null) {
    return new Array(8).fill('#000000'); 
  }
  
  if (v > 0) {
   switch (true) {
		case v <= 0.20:
		    return [BLACK,BLACK,BLACK,RED,BLACK,BLACK,BLACK,BLACK]

		case v <= 0.40:
		    return [BLACK,BLACK,RED,RED,BLACK,BLACK,BLACK,BLACK]

		case v <= 0.60:
		    return [BLACK,RED,RED,RED,BLACK,BLACK,BLACK,BLACK]

		default: 
			return [RED,RED,RED,RED,BLACK,BLACK,BLACK,BLACK]
} 
  }

  if (v < 0) {
   switch (true) {
		case v >= -0.20:
		    return [BLACK,BLACK,BLACK,BLACK,GREEN,BLACK,BLACK,BLACK]
		
		case v >= -0.40:
		    return [BLACK,BLACK,BLACK,BLACK,GREEN,GREEN,BLACK,BLACK]
		    
		case v >= -0.60:
		    return [BLACK,BLACK,BLACK,BLACK,GREEN,GREEN,GREEN,BLACK]
		    
		default: 
			return [BLACK,BLACK,BLACK,BLACK,GREEN,GREEN,GREEN,GREEN]
   } 
  } 
  

  return [BLACK,GREEN,RED,BLACK,GREEN,RED];
}


return getColorArray(value)