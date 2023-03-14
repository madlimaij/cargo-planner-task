const apiEndpoint = "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"

export const fetchShipments = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      if (response.status === 200) {
        return { data: data, status: response.status };
      }
      console.log('Status ', response.status);
    } catch (error) {
      console.log(error);
    }
  };