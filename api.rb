require 'sinatra'

get '/hello' do
  'hello world'
end

# Howto
# `$ gem install sinatra`
# `$ ruby api.rb`
#
# modify apiBaseURL with `http://localhost:4567` in `app/config/index.js`
# then restart your app
