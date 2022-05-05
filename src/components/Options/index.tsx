import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { FeedbackType } from '../Widget';
import { Option } from './Option';
import { styles } from './styles';

interface OptionsProps {
  onOptionSelected: (feedbackType: FeedbackType) => void;
}

export function Options({ onOptionSelected }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            image={value.image}
            title={value.title}
            onPress={() => onOptionSelected(key as FeedbackType)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
