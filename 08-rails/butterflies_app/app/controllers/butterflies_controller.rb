class ButterfliesController < ApplicationController
  before_action :set_butterfly, only: [:show, :edit, :update, :destroy]

  # GET /butterflies
  # GET /butterflies.json
  def index
    @butterflies = Butterfly.all
  end

  # GET /butterflies/1
  # GET /butterflies/1.json
  def show
  end

  # GET /butterflies/new
  def new
    @butterfly = Butterfly.new
  end

  # GET /butterflies/1/edit
  def edit
  end

  # POST /butterflies
  # POST /butterflies.json
  def create
    @butterfly = Butterfly.new(butterfly_params)

    respond_to do |format|
      if @butterfly.save
        format.html { redirect_to @butterfly, notice: 'Butterfly was successfully created.' }
        format.json { render :show, status: :created, location: @butterfly }
      else
        format.html { render :new }
        format.json { render json: @butterfly.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /butterflies/1
  # PATCH/PUT /butterflies/1.json
  def update
    respond_to do |format|
      if @butterfly.update(butterfly_params)
        format.html { redirect_to @butterfly, notice: 'Butterfly was successfully updated.' }
        format.json { render :show, status: :ok, location: @butterfly }
      else
        format.html { render :edit }
        format.json { render json: @butterfly.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /butterflies/1
  # DELETE /butterflies/1.json
  def destroy
    @butterfly.destroy
    respond_to do |format|
      format.html { redirect_to butterflies_url, notice: 'Butterfly was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_butterfly
      @butterfly = Butterfly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def butterfly_params
      params.require(:butterfly).permit(:name, :family, :image)
    end
end
