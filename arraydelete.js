function getelement(arr,n,key)
    {
        let i;
        for (i = 0; i < n; i++)
            if (arr[i] == key)
                return i;
      
        return -1;
    }
     
    function deleteElement(arr,n,key)
    {
        let pos = getelement(arr, n, key);
      
        if (pos == -1)
        {
            document.write("Element not found");
            return n;
        }
      
        let i;
        for (i = pos; i< n - 1; i++)
            arr[i] = arr[i + 1];
      
        return n - 1;
    }
      
     
        let i;
        let arr = [10, 50, 30, 40, 20];
      
        let n = arr.length;
        let key = 30;
      
        document.write("Array before deletion<br>");
        for (i=0; i<n; i++)
          document.write(arr[i] + " ");
      
        n = deleteElement(arr, n, key);
      
       document.write("<br><br>Array after deletion<br>");
        for (i=0; i<n; i++)
          document.write(arr[i]+" ");