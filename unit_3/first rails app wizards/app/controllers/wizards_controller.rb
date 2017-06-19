class WizardsController < ApplicationController
  def index
    @wizards = Wizard.all
  end

  def show
    @wizard = Wizard.find(params[:id])
  end
end
