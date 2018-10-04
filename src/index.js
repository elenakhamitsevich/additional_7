module.exports = function solveSudoku(matrix) {
    for (let i = 0; i < matrix.length; i = i+3){
        for (let j = 0; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i+1][j+1]!=k && matrix[i+2][j+2]!= k && matrix[i+1][j+2]!=k && matrix[i+2][j+1]!=k){
                 for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      
      
      for (let i = 0; i < matrix.length; i = i+3){
        for (let j = 1; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i+1][j-1]!=k && matrix[i+2][j-1]!= k && matrix[i+1][j+1]!=k && matrix[i+2][j+1]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      for (let i = 0; i < matrix.length; i = i+3){
        for (let j = 2; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i+1][j-2]!=k && matrix[i+2][j-2]!= k && matrix[i+1][j-1]!=k && matrix[i+2][j-1]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      for (let i = 1; i < matrix.length; i = i+3){
        for (let j = 0; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-1][j+1]!=k && matrix[i-1][j+2]!= k && matrix[i+1][j+1]!=k && matrix[i+1][j+2]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      
      for (let i = 1; i < matrix.length; i = i+3){
        for (let j = 1; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-1][j-1]!=k && matrix[i-1][j+1]!= k && matrix[i+1][j-1]!=k && matrix[i+1][j+1]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      for (let i = 1; i < matrix.length; i = i+3){
        for (let j = 2; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-1][j-2]!=k && matrix[i-1][j-1]!= k && matrix[i+1][j-2]!=k && matrix[i+1][j-1]!=k){
              for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      
      for (let i = 2; i < matrix.length; i = i+3){
        for (let j = 0; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-2][j+1]!=k && matrix[i-2][j+2]!= k && matrix[i-1][j+1]!=k && matrix[i-1][j+2]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      
      for (let i = 2; i < matrix.length; i = i+3){
        for (let j = 1; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-2][j-1]!=k && matrix[i-1][j-1]!= k && matrix[i-2][j+1]!=k && matrix[i-1][j+1]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      for (let i = 2; i < matrix.length; i = i+3){
        for (let j = 2; j < matrix.length; j = j+3){
          if(matrix[i][j] === 0) {
            t1:
            for (let k=1; k<=9;k++){
              test:
              if(matrix[i-2][j-2]!=k && matrix[i-2][j-1]!= k && matrix[i-1][j-2]!=k && matrix[i-1][j-1]!=k){
                for(let n = 0; n < matrix.length; n++){
              if(matrix[i][n] === k){
                break test;
              }
            }
              for(let n = 0; n < matrix.length; n++){
              if(matrix[n][j] === k){
                break test;
              }
             }
             
             matrix[i][j] = k;
             break t1;
            }}
      }}
      }
      return matrix;
}
