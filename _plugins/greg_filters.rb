module Liquid
  module GregFilters
    def index_of(arr, target)
      arr.index(target)
    end
  end

  Template.register_filter(GregFilters)
end
