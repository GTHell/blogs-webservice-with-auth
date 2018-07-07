<template>
<v-card class="my-1" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="'https://previews.123rf.com/images/bluebay/bluebay1409/bluebay140900107/31543776-words-news-on-digital-blue-background.jpg'"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">Hello World</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus voluptate assumenda ex fuga exercitationem! Ipsam, ex nisi, blanditiis nesciunt alias asperiores, maiores fugit nostrum qui cum atque earum quam!
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
              </template>