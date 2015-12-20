require 'webrick'
require 'json'
# sudo gem install pry
require 'pry'
# sudo gem install pry-nav
require 'pry-nav'

port = 3001

puts "Server started: http://localhost:#{port}/"

server = WEBrick::HTTPServer.new Port: port

server.mount_proc '/api/comments' do |req, res|
  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  # Access-Control-Allow-Originの制御外す
  res['Access-Control-Allow-Origin'] = "*"

  comments = JSON.parse(File.read('./comments.json', encoding: 'UTF-8'))

  case req.request_method
  when 'GET'
    res.body = JSON.generate(comments)
  when 'POST'
    # Assume it's well formed
    comment = { id: (Time.now.to_f * 1000).to_i }
    req.query.each do |key, value|
      comment[key] = value.force_encoding('UTF-8')
    end
    comments << comment
    File.write(
      './comments.json',
      JSON.pretty_generate(comments, indent: '    '),
      encoding: 'UTF-8'
    )
    res.body = JSON.generate(comment)
  end
end

trap('INT') { server.shutdown }

server.start
