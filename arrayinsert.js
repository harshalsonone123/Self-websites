    function insertit(arr, n, key, capacity)
    {
        if (n >= capacity)
            return n;
      
        arr[n] = key;
        return (n + 1);
    }
     
    let arr = new Array(20);
    arr[0] = 12;
    arr[1] = 16;
    arr[2] = 20;
    arr[3] = 40;
    arr[4] = 50;
    arr[5] = 70;
    let capacity = 20;
    let n = 6;
    let i, key = 26;
 
    document.write("Before Insertion: ");
    for (i = 0; i < n; i++)
      document.write(arr[i]+" ");
    document.write("</br>");
 
    // Inserting key
    n = insertit(arr, n, key, capacity);
 
    document.write("After Insertion: ");
    for (i = 0; i < n; i++)
      document.write(arr[i]+" ");