
import axios from 'axios'

const api_url = '/commits'

const getCommits = async () => {
    return await axios.get(api_url)
}

export default getCommits