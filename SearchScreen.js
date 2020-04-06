import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/Search Bar';
import yelp  from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm]= useState ('');
    const [results, setResults]= useState ([]);

    const SearchApi = async () => {
       const response= await yelp.get(`/search`,{
        params:{
        term,
        location: 'san jose'
        } 
       }); 
     results (response.data.businesses);
    };
    return (
    <View>
        <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit ={SearchApi}
        />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
    </View>
    );
};
const styles = StyleSheet.create ({});
export default SearchScreen;