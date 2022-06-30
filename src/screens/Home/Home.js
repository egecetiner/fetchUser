import {
  View,
  ScrollView
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodes} from '../../redux/episodeSlice/episodeSlice';
import styles from './Home.styles';
import Episodes from '../../components/Episodes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episode.episodes);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {episodes?.users?.map(episode => {
            return (
              <Episodes
                item={episode}
                key={episode.id}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
