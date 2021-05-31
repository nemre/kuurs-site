const Icons = {
  kuurs: 'M9.604 8.18l4.4-6.38c0.834-1.2 1.906-1.8 3.227-1.8 1.072 0 2.002 0.381 2.789 1.144 0.783 0.765 1.176 1.675 1.176 2.738 0 0.784-0.207 1.479-0.624 2.079l-3.967 5.769 4.853 6.153c0.484 0.612 0.727 1.33 0.727 2.15 0 1.086-0.381 2.018-1.145 2.798-0.762 0.779-1.686 1.169-2.771 1.169-1.189 0-2.097-0.387-2.721-1.16l-5.943-7.417v4.089c0 1.168-0.202 2.074-0.607 2.722-0.737 1.177-1.803 1.766-3.213 1.766-1.282 0-2.276-0.436-2.979-1.299-0.66-0.799-0.99-1.856-0.99-3.172v-15.164c0-1.245 0.336-2.274 1.004-3.083 0.698-0.854 1.668-1.282 2.906-1.282 1.179 0 2.16 0.428 2.946 1.282 0.438 0.475 0.715 0.953 0.831 1.44 0.070 0.3 0.105 0.858 0.105 1.68v3.778z',
  edit: 'M11 3h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17.793 1.793l-9.5 9.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l9.5-9.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM19.207 3.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-9.304 9.304-2.114 0.529 0.529-2.114z',
  svelte: 'M20.68 3.17c-1.334-1.919-3.528-3.16-6.012-3.16-1.4 0-2.708 0.394-3.819 1.078l0.032-0.018-5.6 3.56c-1.501 0.951-2.565 2.477-2.884 4.261l-0.006 0.039c-0.070 0.362-0.11 0.778-0.11 1.203 0 1.144 0.289 2.221 0.797 3.162l-0.017-0.035c-0.462 0.683-0.795 1.492-0.945 2.364l-0.005 0.036c-0.067 0.36-0.105 0.774-0.105 1.196 0 1.486 0.474 2.862 1.279 3.984l-0.014-0.020c1.34 1.922 3.541 3.163 6.031 3.163 1.392 0 2.693-0.388 3.802-1.062l-0.032 0.018 5.6-3.56c1.497-0.953 2.557-2.479 2.874-4.262l0.006-0.038c0.069-0.36 0.108-0.773 0.108-1.196 0-1.143-0.288-2.219-0.796-3.159l0.017 0.035c0.666-1.032 1.062-2.293 1.062-3.647 0-1.479-0.473-2.848-1.276-3.963l0.014 0.020zM10.32 21.13c-0.335 0.091-0.719 0.143-1.115 0.143-1.505 0-2.835-0.751-3.636-1.898l-0.010-0.014c-0.65-0.9-0.89-2.010-0.7-3.11l0.11-0.53 0.1-0.33 0.3 0.2c0.66 0.5 1.4 0.86 2.19 1.1l0.2 0.070-0.020 0.2c-0.020 0.28 0.060 0.59 0.22 0.83 0.33 0.47 0.9 0.7 1.45 0.55 0.12-0.040 0.24-0.080 0.34-0.14l5.58-3.56c0.28-0.18 0.46-0.45 0.53-0.77 0.060-0.33-0.020-0.67-0.2-0.94-0.33-0.46-0.9-0.67-1.45-0.53-0.12 0.040-0.25 0.090-0.35 0.15l-2.11 1.34c-0.647 0.39-1.428 0.621-2.263 0.621-1.5 0-2.827-0.746-3.628-1.887l-0.009-0.014c-0.478-0.662-0.765-1.49-0.765-2.384 0-0.256 0.024-0.507 0.069-0.751l-0.004 0.025c0.203-1.105 0.854-2.029 1.754-2.591l0.016-0.009 5.57-3.56c0.35-0.22 0.73-0.38 1.14-0.5 1.8-0.47 3.7 0.24 4.76 1.76 0.478 0.664 0.764 1.494 0.764 2.39 0 0.446-0.071 0.876-0.202 1.279l0.008-0.029-0.1 0.33-0.29-0.2c-0.629-0.464-1.36-0.839-2.147-1.086l-0.053-0.014-0.2-0.060 0.020-0.2c0.020-0.29-0.060-0.6-0.22-0.84-0.33-0.47-0.9-0.67-1.45-0.53-0.12 0.040-0.24 0.080-0.34 0.14l-5.59 3.59c-0.28 0.19-0.46 0.45-0.52 0.78-0.060 0.32 0.020 0.67 0.2 0.93 0.32 0.47 0.9 0.67 1.44 0.53 0.13-0.040 0.25-0.080 0.35-0.14l2.13-1.36c0.35-0.23 0.74-0.4 1.14-0.51 1.81-0.47 3.7 0.24 4.76 1.77 0.65 0.9 0.9 2.010 0.72 3.1-0.198 1.102-0.842 2.025-1.734 2.591l-0.016 0.009-5.58 3.55c-0.334 0.205-0.718 0.379-1.125 0.501l-0.035 0.009z',
  react: 'M12 9.861c-1.181 0-2.139 0.958-2.139 2.139s0.958 2.139 2.139 2.139v0c1.181 0 2.139-0.958 2.139-2.139s-0.958-2.139-2.139-2.139v0zM6.008 16.255l-0.472-0.12c-3.518-0.889-5.536-2.398-5.536-4.139s2.018-3.25 5.536-4.139l0.472-0.119 0.133 0.468c0.408 1.395 0.872 2.582 1.424 3.718l-0.061-0.14 0.101 0.213-0.101 0.213c-0.492 0.997-0.956 2.184-1.321 3.413l-0.042 0.165zM5.317 8.95c-2.674 0.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046 0.384-1.215 0.785-2.223 1.247-3.197l-0.065 0.151c-0.398-0.824-0.799-1.832-1.133-2.871l-0.049-0.175zM17.992 16.255l-0.133-0.469c-0.408-1.394-0.872-2.58-1.425-3.715l0.061 0.138-0.101-0.213 0.101-0.213c0.492-0.997 0.956-2.183 1.322-3.412l0.042-0.166 0.133-0.468 0.473 0.119c3.517 0.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139zM17.501 11.996c0.48 1.039 0.877 2.060 1.182 3.046 2.675-0.752 4.315-1.901 4.315-3.046s-1.641-2.294-4.315-3.046c-0.383 1.214-0.784 2.223-1.246 3.196l0.064-0.15zM5.31 8.945l-0.133-0.467c-0.989-3.486-0.689-5.984 0.823-6.856 1.483-0.856 3.864 0.155 6.359 2.716l0.34 0.349-0.34 0.349c-0.86 0.893-1.655 1.861-2.371 2.89l-0.051 0.077-0.135 0.193-0.235 0.020c-1.406 0.113-2.697 0.329-3.948 0.645l0.163-0.035zM7.206 2.315c-0.268 0-0.505 0.058-0.705 0.173-0.994 0.573-1.17 2.565-0.485 5.253 0.908-0.214 2.011-0.391 3.135-0.494l0.098-0.007c0.671-0.948 1.344-1.778 2.067-2.561l-0.015 0.017c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-0.001 0-0.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-0.34-0.349 0.34-0.349c0.859-0.893 1.655-1.862 2.37-2.891l0.051-0.077 0.135-0.193 0.234-0.020c1.406-0.112 2.698-0.328 3.95-0.644l-0.163 0.035 0.472-0.119 0.134 0.468c0.987 3.484 0.688 5.983-0.824 6.854-0.337 0.194-0.741 0.308-1.171 0.308-0.012 0-0.024-0-0.035-0l0.002 0zM12.699 19.296c1.56 1.519 3.037 2.381 4.095 2.381h0.001c0.267 0 0.505-0.058 0.704-0.173 0.994-0.573 1.171-2.566 0.485-5.254-0.909 0.214-2.012 0.391-3.137 0.494l-0.098 0.007c-0.67 0.949-1.343 1.779-2.066 2.562l0.015-0.017zM18.69 8.945l-0.472-0.119c-1.090-0.282-2.381-0.498-3.704-0.605l-0.083-0.005-0.234-0.020-0.135-0.193c-0.766-1.106-1.561-2.075-2.428-2.974l0.007 0.007-0.34-0.349 0.34-0.349c2.494-2.56 4.874-3.571 6.359-2.716 1.512 0.872 1.812 3.37 0.824 6.855zM14.75 7.24c1.142 0.104 2.227 0.273 3.234 0.501 0.686-2.688 0.509-4.68-0.485-5.253-0.988-0.571-2.845 0.304-4.8 2.208 0.708 0.766 1.381 1.596 1.999 2.467l0.052 0.077zM7.206 22.677c-0.010 0-0.022 0-0.035 0-0.431 0-0.835-0.114-1.183-0.314l0.012 0.006c-1.512-0.871-1.812-3.369-0.823-6.854l0.132-0.468 0.472 0.119c1.155 0.291 2.429 0.496 3.785 0.609l0.235 0.020 0.134 0.193c0.767 1.106 1.563 2.075 2.429 2.976l-0.007-0.008 0.34 0.349-0.34 0.349c-1.898 1.95-3.728 3.023-5.151 3.023zM6.016 16.25c-0.686 2.688-0.509 4.681 0.485 5.254 0.987 0.563 2.843-0.305 4.8-2.208-0.707-0.766-1.381-1.596-2-2.468l-0.052-0.077c-1.222-0.11-2.325-0.287-3.401-0.533l0.168 0.032zM12 16.878c-0.823 0-1.669-0.036-2.516-0.106l-0.235-0.020-0.135-0.193c-0.408-0.576-0.854-1.268-1.273-1.979l-0.077-0.143c-0.339-0.568-0.728-1.299-1.087-2.046l-0.079-0.182-0.1-0.213 0.1-0.213c0.438-0.929 0.826-1.659 1.243-2.371l-0.077 0.143c0.414-0.716 0.869-1.43 1.35-2.122l0.135-0.193 0.235-0.020c0.754-0.068 1.631-0.106 2.517-0.106s1.763 0.039 2.629 0.114l-0.112-0.008 0.234 0.020 0.134 0.193c0.882 1.249 1.721 2.675 2.439 4.17l0.078 0.18 0.101 0.213-0.101 0.213c-0.793 1.674-1.632 3.1-2.579 4.443l0.062-0.093-0.134 0.193-0.234 0.020c-0.847 0.070-1.694 0.106-2.517 0.106zM9.803 15.794c1.48 0.111 2.914 0.111 4.395 0 0.753-1.084 1.484-2.328 2.12-3.627l0.076-0.171c-0.71-1.469-1.441-2.713-2.259-3.893l0.062 0.095c-0.658-0.053-1.424-0.083-2.197-0.083s-1.539 0.030-2.297 0.090l0.1-0.006c-0.756 1.085-1.488 2.33-2.123 3.63l-0.074 0.168c0.713 1.47 1.444 2.714 2.26 3.895l-0.063-0.097z',
  angular: 'M9.93 12.645h4.134l-2.068-4.905zM11.996 0.009l-11.31 3.979 1.725 14.76 9.585 5.243 9.588-5.238 1.724-14.763zM19.054 18.306h-2.636l-1.42-3.501h-6.003l-1.42 3.501h-2.638l7.060-15.648z',
  vue: 'M24 1.61h-9.94l-2.060 3.55-2.060-3.55h-9.94l12 20.78zM12 14.080l-6.84-11.85h4.43l2.41 4.18 2.41-4.18h4.43z',
  discord: 'M20.222 0c1.406 0 2.54 1.137 2.607 2.475v21.525l-2.677-2.273-1.47-1.338-1.604-1.398 0.67 2.205h-14.038c-1.402 0-2.54-1.065-2.54-2.476v-16.24c0-1.338 1.14-2.477 2.545-2.477h16.5zM14.104 5.683h-0.030l-0.202 0.2c2.073 0.6 3.076 1.537 3.076 1.537-1.336-0.668-2.54-1.002-3.744-1.137-0.87-0.135-1.74-0.064-2.475 0h-0.2c-0.47 0-1.47 0.2-2.81 0.735-0.467 0.203-0.735 0.336-0.735 0.336s1.002-1.002 3.21-1.537l-0.135-0.135c0 0-1.672-0.064-3.477 1.27 0 0-1.805 3.144-1.805 7.020 0 0 1 1.74 3.743 1.806 0 0 0.4-0.533 0.805-1.002-1.54-0.468-2.14-1.404-2.14-1.404s0.134 0.066 0.335 0.2h0.060c0.030 0 0.044 0.015 0.060 0.030v0.006c0.016 0.016 0.030 0.030 0.060 0.030 0.33 0.136 0.66 0.27 0.93 0.4 0.466 0.202 1.065 0.403 1.8 0.536 0.93 0.135 1.996 0.2 3.21 0 0.6-0.135 1.2-0.267 1.8-0.535 0.39-0.2 0.87-0.4 1.397-0.737 0 0-0.6 0.936-2.205 1.404 0.33 0.466 0.795 1 0.795 1 2.744-0.060 3.81-1.8 3.87-1.726 0-3.87-1.815-7.020-1.815-7.020-1.635-1.214-3.165-1.26-3.435-1.26zM14.272 10.096c0.703 0 1.27 0.6 1.27 1.335 0 0.74-0.57 1.34-1.27 1.34s-1.27-0.6-1.27-1.334c0.002-0.74 0.573-1.338 1.27-1.341zM9.729 10.096c0.7 0 1.266 0.6 1.266 1.335 0 0.74-0.57 1.34-1.27 1.34s-1.27-0.6-1.27-1.334c0-0.74 0.57-1.338 1.274-1.341z',
  slack: 'M5.042 15.165c-0.003 1.391-1.129 2.518-2.52 2.523h-0c-1.392-0.003-2.519-1.131-2.522-2.523v-0c0.004-1.391 1.131-2.517 2.522-2.52h2.52zM6.313 15.165c0.004-1.39 1.13-2.517 2.521-2.52h0c1.391 0.003 2.517 1.13 2.521 2.52v6.313c-0.003 1.391-1.13 2.518-2.521 2.522h-0c-1.391-0.004-2.518-1.131-2.521-2.522v-0zM8.834 5.042c-1.39-0.004-2.516-1.13-2.521-2.52v-0c0.003-1.391 1.13-2.518 2.521-2.522h0c1.391 0.004 2.518 1.131 2.521 2.522v2.52zM8.834 6.313c1.391 0.004 2.517 1.13 2.521 2.521v0c-0.004 1.391-1.13 2.517-2.521 2.521h-6.312c-1.391-0.003-2.518-1.13-2.522-2.521v-0c0.004-1.391 1.131-2.518 2.522-2.521h0zM18.956 8.834c0.004-1.391 1.131-2.518 2.522-2.521h0c1.391 0.003 2.518 1.13 2.522 2.521v0c-0.004 1.391-1.131 2.518-2.522 2.521h-2.522zM17.688 8.834c-0.004 1.391-1.131 2.518-2.523 2.521h-0c-1.39-0.004-2.517-1.13-2.52-2.521v-6.312c0.003-1.391 1.129-2.518 2.52-2.522h0c1.392 0.003 2.52 1.13 2.523 2.522v0zM15.165 18.956c1.392 0.003 2.52 1.13 2.523 2.522v0c-0.003 1.392-1.131 2.519-2.523 2.522h-0c-1.391-0.004-2.517-1.131-2.52-2.522v-2.522zM15.165 17.688c-1.391-0.004-2.518-1.132-2.52-2.523v-0c0.003-1.39 1.13-2.517 2.52-2.52h6.313c1.391 0.003 2.518 1.129 2.522 2.52v0c-0.003 1.392-1.13 2.52-2.522 2.523h-0z',
  ember: 'M0 0v24h24v-24zM12.29 4.38c1.66-0.030 2.83 0.42 3.84 1.85 2.25 5.58-6 8.4-6 8.4s-0.23 1.48 2.020 1.42c2.78 0 5.7-2.15 6.81-3.060 0.114-0.096 0.262-0.154 0.423-0.154 0.187 0 0.356 0.078 0.477 0.203l0 0 0.84 0.87c0.113 0.118 0.182 0.279 0.182 0.455 0 0.172-0.065 0.328-0.173 0.445l0-0.001c-0.72 0.8-2.42 2.46-4.97 3.53 0 0-4.26 1.97-7.13 0.1-1.331-0.811-2.24-2.201-2.379-3.812l-0.001-0.018c0 0-2.080-0.11-3.42-0.63-1.33-0.52 0.010-2.1 0.010-2.1s0.42-0.65 1.2 0 2.24 0.36 2.24 0.36c0.13-1.030 0.35-2.38 0.98-3.81 1.34-3 3.38-4.010 5.050-4.050zM12.62 7.18c-1.1 0.070-2.8 1.78-2.88 4.93 0 0 0.75 0.23 2.41-0.91 1.67-1.14 2-2.97 1.11-3.81-0.145-0.133-0.34-0.215-0.553-0.215-0.031 0-0.061 0.002-0.091 0.005l0.004-0z',
  framer: 'M4 0h16v8h-8zM4 8h8l8 8h-16zM4 16h8v8z',
  figma: 'M12 12c0-2.209 1.791-4 4-4s4 1.791 4 4v0c0 2.209-1.791 4-4 4s-4-1.791-4-4v0zM4 20c0-2.209 1.791-4 4-4v0h4v4c0 2.209-1.791 4-4 4s-4-1.791-4-4v0zM12 0v8h4c2.209 0 4-1.791 4-4s-1.791-4-4-4v0zM4 4c0 2.209 1.791 4 4 4v0h4v-8h-4c-2.209 0-4 1.791-4 4v0zM4 12c0 2.209 1.791 4 4 4v0h4v-8h-4c-2.209 0-4 1.791-4 4v0z',
  youtube: 'M23.495 6.205c-0.29-1.015-1.073-1.798-2.067-2.083l-0.021-0.005c-1.87-0.501-9.396-0.501-9.396-0.501s-7.507-0.010-9.396 0.501c-1.015 0.29-1.798 1.073-2.083 2.067l-0.005 0.021c-0.332 1.71-0.522 3.677-0.522 5.689 0 0.041 0 0.082 0 0.122l-0-0.006c-0 0.028-0 0.061-0 0.095 0 2.011 0.19 3.978 0.553 5.884l-0.031-0.195c0.29 1.015 1.073 1.798 2.067 2.083l0.021 0.005c1.868 0.502 9.396 0.502 9.396 0.502s7.506 0 9.396-0.502c1.015-0.29 1.798-1.073 2.083-2.067l0.005-0.021c0.319-1.675 0.501-3.602 0.501-5.571 0-0.074-0-0.149-0.001-0.223l0 0.011c0.001-0.069 0.001-0.151 0.001-0.233 0-1.97-0.182-3.897-0.531-5.766l0.030 0.193zM9.609 15.601v-7.193l6.264 3.602z',
  excel: 'M23.553 3.102h-8.040v1.488h2.37v2.354h-2.37v0.75h2.37v2.357h-2.37v0.771h2.37v2.229h-2.37v0.893h2.37v2.234h-2.37v0.893h2.37v2.247h-2.37v1.639h8.040c0.127-0.038 0.233-0.188 0.318-0.448 0.085-0.262 0.129-0.475 0.129-0.636v-16.499c0-0.128-0.044-0.205-0.129-0.232-0.085-0.026-0.191-0.040-0.318-0.040zM22.51 19.316h-3.857v-2.245h3.857v2.247zM22.51 16.178h-3.857v-2.235h3.857zM22.51 13.050h-3.857v-2.219h3.857v2.221zM22.51 10.050h-3.857v-2.354h3.857v2.355zM22.51 6.931h-3.857v-2.34h3.857v2.355zM0 2.731v18.601l14.16 2.449v-23.562l-14.16 2.52zM8.393 16.802c-0.054-0.146-0.308-0.766-0.758-1.863-0.449-1.096-0.72-1.734-0.799-1.916h-0.025l-1.519 3.615-2.030-0.137 2.408-4.5-2.205-4.5 2.070-0.109 1.368 3.521h0.027l1.545-3.681 2.139-0.135-2.547 4.87 2.625 4.968-2.299-0.135z',
  video: 'M22 8.943v6.114l-4.28-3.057zM3 4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3.057l5.419 3.871c0.449 0.321 1.074 0.217 1.395-0.232 0.126-0.178 0.187-0.383 0.186-0.582v-10c0-0.552-0.448-1-1-1-0.218 0-0.42 0.070-0.581 0.186l-5.419 3.871v-3.057c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM3 6h11c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z',
  helpCircle: 'M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.033 9.332c0.183-0.521 0.559-0.918 1.022-1.14s1.007-0.267 1.528-0.083c0.458 0.161 0.819 0.47 1.050 0.859 0.183 0.307 0.284 0.665 0.286 1.037 0 0.155-0.039 0.309-0.117 0.464-0.080 0.16-0.203 0.325-0.368 0.49-0.709 0.709-1.831 1.092-1.831 1.092-0.524 0.175-0.807 0.741-0.632 1.265s0.741 0.807 1.265 0.632c0 0 1.544-0.506 2.613-1.575 0.279-0.279 0.545-0.614 0.743-1.010 0.2-0.4 0.328-0.858 0.328-1.369-0.004-0.731-0.204-1.437-0.567-2.049-0.463-0.778-1.19-1.402-2.105-1.724-1.042-0.366-2.135-0.275-3.057 0.167s-1.678 1.238-2.044 2.28c-0.184 0.521 0.090 1.092 0.611 1.275s1.092-0.091 1.275-0.611zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z',
  fileText: 'M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM16 12h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 16h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10 8h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z',
  briefCase: 'M9 6v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 20v-12h6v12zM7 8v12h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM17 6v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM17 20v-12h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293z',
  barChart2: 'M19 20v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1zM13 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v16c0 0.552 0.448 1 1 1s1-0.448 1-1zM7 20v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1z',
  compass: 'M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM17.189 8.076c0.066-0.196 0.072-0.418 0-0.632-0.175-0.524-0.741-0.807-1.265-0.632l-6.36 2.12c-0.29 0.098-0.529 0.323-0.632 0.632l-2.12 6.36c-0.066 0.196-0.072 0.418 0 0.632 0.175 0.524 0.741 0.807 1.265 0.632l6.36-2.12c0.29-0.098 0.529-0.323 0.632-0.632zM14.659 9.341l-1.33 3.988-3.988 1.33 1.329-3.988z'
}

export default Icons
