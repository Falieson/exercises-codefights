function domainType(domains) {
  var tlds = domains.map(d => {
    for(i = d.length; i>=0; i--){
      if(d[i]==='.' ){
        return d.substring(i+1,d.length)
      }
    }
  })
  
  var options = {
    "com": "commercial",
    "org" :"organization", 
    "net" :"network", 
    "info" : "information"
  }

  return tlds.map(t => options[t])   
}
