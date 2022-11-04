import { YStack as View, ThemeableStack, Text } from 'tamagui'
export default function Blank() {
  return (
    <View flex={1} bg="$color1">
      <ThemeableStack
        accessibilityLabel="test"
        tag="button"
        onPress={() => alert('hello2')}
        pressStyle={{
          borderColor: 'transparent',
        }}
        focusable={false}
      >
        <Text color="$color12">OKKK</Text>
      </ThemeableStack>
    </View>
  )
}
