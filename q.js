function staircase(n) {
    let symbol = n;
    let inputline = "";
    let inputPosition = n-1;

    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        for (let columIndex = 0; columIndex < n; columIndex += 1) {
        
            if (columIndex < inputPosition) {
                inputline += n-lineIndex
            } else {
                inputline += n-1;
              
            }
          
        }
        console.log(inputline);
        inputline = "";
        inputPosition -= 1;
    }
}
staircase(6)
