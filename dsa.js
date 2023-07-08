let s="loveleetcode"
function findCharacter(s){
    let obj={};
    for(let i=0;i<s.length;i++){
      if(obj.hasOwnProperty(s[i])){
          obj[s[i]]++;
      }else{
          obj[s[i]]=1;
      }
    }
    
     for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] === 1) return i
    }
    
    return -1
    
}
console.log("First non-repeated character =",findCharacter(s));
