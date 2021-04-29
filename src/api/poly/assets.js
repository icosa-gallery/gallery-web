const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class PolyAssetsAPI {
  static getAssetList = async (filter, number, page) => {
    const result = await fetch(api_root + "poly/assets?results=" + number + "&page=" + page, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    if (json.error || !json.assets) {
      return json
      return
    } else {
      if (filter === "featured") {
        return json.assets.slice(0, 4)
      }
      return json.assets
    }
  }

  static getAsset = async (id) => {
    const result = await fetch(api_root + "poly/assets/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
    const json = await result.json()
    return json
  }
}

export default PolyAssetsAPI