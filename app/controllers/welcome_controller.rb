class WelcomeController < ApplicationController

  def index
    @all_works = XmlModel.index
    @camera_makes = XmlModel.get_camera_makes(@all_works)
    @camera_models = XmlModel.get_camera_model(@all_works)
  end

end
