import React from 'react'
import styled from "styled-components"
import { InputBase, IconButton } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fetchData } from "../Redux/getData/action"
import { useDispatch, useSelector } from "react-redux"
const  Wrapper = styled.div`
`
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 655,
      height: 46,      
      '& input::placeholder' :{
        fontSize: '23px',
        fontWeight: '100',
      },
     
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize:'35px',
      fontWeight:'700',
      '&:hover':{borderBottom: '1px solid #ddd',}
    },
  
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const Search = () => {
    const [query, setQuery ] =React.useState("")
    const classes = useStyles();
    const { news } = useSelector( (state) => state.getData)
    const dispatch = useDispatch()  //action dispatcher
    console.log(process.env.REACT_NEWSFEED_API)
const handleSubmit =(e)=>{
  e.preventDefault();
  dispatch( fetchData(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_NEWSFEED_API}`) )
}
    return (
        <>
          <div component="form" className={classes.root}>
            <InputBase  className={classes.input}  placeholder="Search The New York Times"   inputProps={{ 'aria-label': 'Search The New York Times' }}
           value={query} onChange={ (e)=> setQuery(e.target.value) }
            />
    
            <IconButton type="submit" onClick={ handleSubmit } className={classes.iconButton} aria-label="search">
                <SearchIcon style={{color:'black'}} />
            </IconButton>
          </div>
        </>
    )
}

export { Search }