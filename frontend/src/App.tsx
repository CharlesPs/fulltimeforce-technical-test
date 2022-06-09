
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

const App = () => {

  const [ commits, setCommits ] = useState([]);
  const [ loadingStatus, setLoadingStatus ] = useState('idle');

  useEffect(() => {

    const getCommits = async () => {

      setLoadingStatus('loading')

      const res = await axios.get('http://localhost:3100/commits')

      setLoadingStatus('loaded')

      setCommits(res.data)
    }

    if (loadingStatus === 'idle') {

      getCommits()
    }
  }, [ loadingStatus ])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            My Commits List
          </a>
        </div>
      </nav>
      <div className="content pt-3">
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Author</th>
                <th>Commit</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {commits.map((commit: any) => (
                <tr key={commit.sha}>
                  <td>{commit.commit.author.name}</td>
                  <td>{commit.sha}</td>
                  <td>{commit.commit.message}</td>
                  <td>{moment(commit.commit.author.date).format('DD/MM/YYYY h:mm a')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
