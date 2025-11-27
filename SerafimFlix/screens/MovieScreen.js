import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import Movielist from '../components/movieList';

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1,2,3,4,5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  const navigation = useNavigation();
  let movieName = "Joker: Capas e foice";
  useEffect(() => {
  }, [item])

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">

        <View className={"absolute z-20 w-full flex-row justify-between items-center p-4 pt-3"}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <Image
          source={require('../assets/images/moviePoster2.jpg')}
          style={{ width: width, height: height * 0.55 }}
        />

        <LinearGradient
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,0.8)']}
          style={{ width, height: height * 0.4 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
      </View>

      <View style={{ marginTop: -(height * 0.09 ) }} className="space-y-3">

        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>

        <Text className="text-neutral-400 font-semibold text-base text-center">
          Lançado • 2024 • 138 min
        </Text>

        <View className="flex-row justify-center mx-4 space-x-2">

          <Text className="text-neutral-400 font-semibold text-base text-center">
            Drama •
          </Text>

          <Text className="text-neutral-400 font-semibold text-base text-center">
            Crime •
          </Text>

          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thriller
          </Text>

        </View>

        <Text className="text-neutral-400 mx-4 tracking-wide">
          Coringa 2 se passa depois da morte dele no primeiro filme ao explodir o Batman no exoplaneta Thanoide-24 
        </Text>

        <Cast navigation={navigation} cast={cast}/>

        <Movielist title="Filmes Similares" hideSeeAll={true} data={similarMovies}/>

      </View>
    
    </ScrollView>
  )
}