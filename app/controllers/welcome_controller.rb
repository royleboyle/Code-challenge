class WelcomeController < ApplicationController

  def index
    @works = XmlModel.index
    @camera_makes = XmlModel.get_camera_makes(@works)
  end

end
