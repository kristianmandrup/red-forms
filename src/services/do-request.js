export const doRequest = async function (name, request, opts = {}) {
  function log(...msgs) {
    if (opts.logging) {
      console.log('doRequest', ...msgs)
    }
  }

  log(name)
  try {
    let result = await request()
    if (result.status === 200) {
      return result
    }
  } catch (error) {
    return {
      error
    }
  }
}
