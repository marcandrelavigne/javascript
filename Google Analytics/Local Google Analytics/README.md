<b>1- Ajouter le script GA dans le Head et changer l'URL par défaut pour l'URL du script dans notre thème</b>
   - Le script par défaut se trouve ici : http://www.google-analytics.com/analytics.js

```
<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','<?php echo get_bloginfo("template_directory"); ?>/assets/js/analytics.js','ga');

 ga('create', 'UA-xxxxxxxx-1', 'auto');
 ga('send', 'pageview');

</script>
```

<b>2- Automatiser la mise à jour du fichier local</b>
   - Modifier le $localfile.
   - s'asssurer que le fichier local est Chmod 755.

```
<?php
  // Remote file to download
  $remoteFile = 'http://www.google-analytics.com/analytics.js';
  $localfile = '/var/www/example.com/assets/js/analytics.js';

  // Connection time out
  $connTimeout = 10;
  $url = parse_url($remoteFile);
  $host = $url['host'];
  $path = isset($url['path']) ? $url['path'] : '/';

  if (isset($url['query'])) {
    $path .= '?' . $url['query'];
  }

  $port = isset($url['port']) ? $url['port'] : '80';
  $fp = @fsockopen($host, '80', $errno, $errstr, $connTimeout );
  if(!$fp){
    // On connection failure return the cached file (if it exist)
    if(file_exists($localFile)){
      readfile($localFile);
    }
  } else {
    // Send the header information
    $header = "GET $path HTTP/1.0\r\n";
    $header .= "Host: $host\r\n";
    $header .= "User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6\r\n";
    $header .= "Accept: */*\r\n";
    $header .= "Accept-Language: en-us,en;q=0.5\r\n";
    $header .= "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7\r\n";
    $header .= "Keep-Alive: 300\r\n";
    $header .= "Connection: keep-alive\r\n";
    $header .= "Referer: http://$host\r\n\r\n";
    fputs($fp, $header);
    $response = '';

    // Get the response from the remote server
    while($line = fread($fp, 4096)){
      $response .= $line;
    }

    // Close the connection
    fclose( $fp );

    // Remove the headers
    $pos = strpos($response, "\r\n\r\n");
    $response = substr($response, $pos + 4);

    // Return the processed response
    echo $response;

    // Save the response to the local file
    if(!file_exists($localFile)){
      // Try to create the file, if doesn't exist
      fopen($localFile, 'w');
    }

    if(is_writable($localFile)) {
      if($fp = fopen($localFile, 'w')){
        fwrite($fp, $response);
        fclose($fp);
      }
    }
  }
?>
```

<b> 3- Cronjob</b>
À suivre
