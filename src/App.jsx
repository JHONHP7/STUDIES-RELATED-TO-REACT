//JSX = JavaScript + XML
import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

export function App() {
  return (
    
    <div>
      <Header></Header>
      
      <Post 
        author="Jhoninhas" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit magnam saepe exercitationem corporis iure esse, " 
        />
      <Post 
        author="Gabriel" 
        content="aioskdhasjoihfoaihnfabsfjdhfbajfbnakjbfloranr jgbaponjidfhgnbios nfgljdbgolwbtnlw" 
        />
    </div>
        
  )
}
