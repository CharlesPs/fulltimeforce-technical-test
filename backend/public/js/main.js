
import getCommits from "./commits.js"

const initialize = () => {

    const commits = getCommits()

    console.log({ commits })
}


initialize()
