require 'json'
require 'net/http'

class XmlModel < ActiveRecord::Base

  def self.index
    xml = Net::HTTP.get_response(URI.parse('http://take-home-test.herokuapp.com/api/v1/works.xml')).body
    return JSON.parse(Hash.from_xml(xml).to_json)['works']['work']
  end

  def self.get_camera_makes(works)
    hash = Hash.new
    works.each do |value|
      if (!hash.has_key? value['exif']['make'])
        hash[value['exif']['make']] = value
      end
    end
    return hash
  end

end
