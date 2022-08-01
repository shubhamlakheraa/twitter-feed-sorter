import React from "react";
import { Tweet } from "react-twitter-widgets"

export default function ListTweet(props) {

const content = props.twee.map(tweet => 
    <div >
        <Tweet tweetId={tweet.id}
        options={{
          align:"center",
          theme:"dark"
        }}
        />
    </div>
)
  return (content)

}