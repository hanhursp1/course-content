when defined(js):
  import
    std/[dom]

  window.alert("Hello world!")

else:
  echo "Hello world!"