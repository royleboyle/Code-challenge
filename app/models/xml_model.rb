require 'json'
require 'net/http'

class XmlModel < ActiveRecord::Base

  def self.index
    xml = Net::HTTP.get_response(URI.parse('http://take-home-test.herokuapp.com/api/v1/works.xml')).body
    return JSON.parse(Hash.from_xml(xml).to_json)['works']['work']
  end

  def self.get_camera_makes(works)
    hash_camera_makes = Hash.new
    works.each do |value|
      unless (value['exif']['make'].nil?)
        if (!hash_camera_makes.has_key? value['exif']['make'])
          hash_camera_makes[value['exif']['make']] = [value]
        else
          hash_camera_makes[value['exif']['make']].push(value)
        end
      end
    end
    return hash_camera_makes
  end


  def self.get_camera_model(works)
    hash_camera_models = Hash.new
    works.each do |value|
      if (!hash_camera_models.has_key? value['exif']['model'])
        hash_camera_models[value['exif']['model']] = [value]
      else
        hash_camera_models[value['exif']['model']].push(value)
      end

    end
    return hash_camera_models
  end

end

