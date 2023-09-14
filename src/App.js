import "./styles.css";
import "antd/dist/reset.css";
import FastFetchList from "./FastFetchList";
import NormalList from "./NormalList";
import slowFetch from "./slowFetch";
import { FetchConfigProvider, IndexedDBStore } from "react-fast-fetch";

const fetcher = (url) => slowFetch(url).then((res) => res.json());

const store = new IndexedDBStore({
  dbName: "test_fetch_store",
  limit: 1000
});

export default function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th style={{ width: 200 }}>非SWR</th>
            <th style={{ width: 200 }}>SWR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <NormalList />
            </td>
            <td>
              <FetchConfigProvider fetcher={fetcher} store={store}>
                <FastFetchList />
              </FetchConfigProvider>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
