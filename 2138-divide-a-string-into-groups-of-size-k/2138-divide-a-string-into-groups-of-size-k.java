class Solution {
    public String[] divideString(String str, int k, char fill) {
      
        //return if the str.len and k are same
        if(str.length() == k)
            return new String[]{str};
        
        int strLen = str.length();

        
        //store str in the stringbuilder
        StringBuilder sb = new StringBuilder(str);
        
        
        String[] strArr = (strLen % k == 0)?new String[(strLen/k)]:new String[(strLen/k)+1];
        
       if(strLen % k != 0){
           for(int i=0; i<k-(strLen%k); i++){
               sb.append(fill);
           }
       }
        
        int index = 0;
       //divide arr to k 
        for(int i=0; i<sb.length(); i+= k){
             strArr[index] = sb.substring(i,(i+k));
              ++index;
        }
        
        return strArr;
        
        
        
    }
}